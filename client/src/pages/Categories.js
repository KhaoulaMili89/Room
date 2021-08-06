import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CategoriesCard from '../components/Categories/CategoriesCard'
import {useDispatch} from 'react-redux'
import {get_Categorie} from '../actions/categorieAction'
import AddCategorie from '../components/Categories/AddCategorie'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    marge :
    {
      display: 'flex',
      justifyContent:'space-around',
      margin: theme.spacing(3),
      padding: theme.spacing(2,6, 2),
      width: '120ch'

    },
    Title :
    {
      alignText:'center'
    }
    
  }));

const Categories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( get_Categorie() );

    },[]);

    const categories = useSelector( (state) => state.categorieReducer.categories)
    const classes = useStyles();

    return (
<div>
<Grid container  >
            
            <h1 className={classes.Title}>All Categories</h1> <br/>
            <p><AddCategorie/> </p>
             <p className={classes.marge} style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap' }}>
           
         {categories && categories.map((categorie) => <CategoriesCard className={classes.marge} key = {categorie._id} categorie = {categorie} />)} </p>
              
              </Grid>
      </div>
    );
};

export default Categories;
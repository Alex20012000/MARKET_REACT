import { Category } from '@/lib/slices/books/slices';
import styles from './SideBar.module.scss';
import Button from '@/components/common/Button/Button';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCategoryAction } from '@/lib/slices/books/actions/setCategoryAction';
import cn from 'classnames';
import getCategory from '@/lib/slices/books/selectors/getCategory';

const configMenu = [
    {name: Category.Architecture, title: Category.Architecture},
    {name: Category.Art_Fashion, title: Category.Art_Fashion},
    {name: Category.Biography, title: Category.Biography },
    {name: Category.Business, title: Category.Business },
    {name: Category.Crafts_Hobbies, title: Category.Crafts_Hobbies},
    {name: Category.Drama, title: Category.Drama },
    {name: Category.Fiction, title: Category.Fiction },
    {name: Category.Food_Drink, title: Category.Food_Drink},
    {name: Category.Health_Wellbeing, title: Category.Health_Wellbeing},
    {name: Category.History_Politics, title: Category.History_Politics},
    {name: Category.Humor, title: Category.Humor },
    {name: Category.Poetry, title: Category.Poetry },
    {name: Category.Psychology, title: Category.Psychology},
    {name: Category.Science, title: Category.Science },
    {name: Category.Technology, title: Category.Technology},
    {name: Category.Travel_Maps, title: Category.Travel_Maps},
];

const SideBar = () => {
    const dispatch = useAppDispatch();
    
    const category = useAppSelector(getCategory);

    const selectCategory = (category: Category) => () => {
        dispatch(setCategoryAction(category))
    }
    return (
        <ul className = {styles.categories}>
            {configMenu.map((item) => 
                <li>
                    <div 
                        onClick = {selectCategory(item.name)}
                        className = {cn(styles.categoriesBtn, {[styles.categoriesBtn_active]: category === item.name})}
                    >
                        {item.title}
                    </div>
                </li> 
            )}
        </ul>
    )
};

export default SideBar;

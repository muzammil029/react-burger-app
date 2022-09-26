import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems=()=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
        <NavigationItem link="/" checkout></NavigationItem>
    </ul>
);
export default navigationItems;
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps168959Navigator from '../features/Maps168959/navigator';
import Additem168958Navigator from '../features/Additem168958/navigator';
import Maps168954Navigator from '../features/Maps168954/navigator';
import UserProfile168950Navigator from '../features/UserProfile168950/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps168959: { screen: Maps168959Navigator },
Additem168958: { screen: Additem168958Navigator },
Maps168954: { screen: Maps168954Navigator },
UserProfile168950: { screen: UserProfile168950Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

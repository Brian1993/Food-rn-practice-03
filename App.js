import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SeachScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator(
  {
    Search: SeachScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
)

export default createAppContainer(navigator)

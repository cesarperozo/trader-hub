import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import InstrumentsScreen from 'src/screens/Instruments/IntrumentsScreen'
import PortfolioScreen from 'src/screens/Portfolio/PortfolioScreen'

export type TradingFlowStackParamList = {
  Intruments: undefined
  Portfolio: undefined
}

const TradingFlowStack = createStackNavigator<TradingFlowStackParamList>()


const TradingFlowNavigator = () => {
  return (
    <TradingFlowStack.Navigator initialRouteName="Intruments">
      <TradingFlowStack.Screen name="Portfolio" component={PortfolioScreen} />
      <TradingFlowStack.Screen name="Intruments" component={InstrumentsScreen} />
    </TradingFlowStack.Navigator>
  )
}

export default TradingFlowNavigator

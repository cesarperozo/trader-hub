import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'

export type TradingFlowStackParamList = {
  intruments: undefined
  portafolio: undefined
}

const TradingFlowStack = createStackNavigator<TradingFlowStackParamList>()

const Instruments = () => {
  return (
    <View>
      <Text>List of Instruments</Text>
      {/* Aquí puedes agregar más contenido y lógica */}
    </View>
  )
}

const Portafolio = () => {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <Text style={{ color: 'white', fontFamily: 'Manrope-SemiBold' }}>
        List of Portafolio
      </Text>
      {/* Aquí puedes agregar más contenido y lógica */}
    </View>
  )
}

const TradingFlowNavigator = () => {
  return (
    <TradingFlowStack.Navigator initialRouteName="portafolio">
      <TradingFlowStack.Screen name="portafolio" component={Portafolio} />
      <TradingFlowStack.Screen name="intruments" component={Instruments} />
    </TradingFlowStack.Navigator>
  )
}

export default TradingFlowNavigator

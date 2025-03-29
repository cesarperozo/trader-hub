import AppText from "commons/components/AppText/AppText"
import { View } from "react-native"

const PortfolioScreen = () => {
  return (
    <View style={{ backgroundColor: 'red' }}>
      <AppText type="h6" style={{ color: 'white', fontFamily: 'Manrope-SemiBold' }}>
        List of Portafolio
      </AppText>
      {/* Aquí puedes agregar más contenido y lógica */}
    </View>
  )
}

export default PortfolioScreen
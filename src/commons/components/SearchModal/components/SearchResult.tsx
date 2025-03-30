import React from "react";
import { FlatList, View } from "react-native";

import { styles } from "./SearchResult.styles";
import { InstrumentTO } from "src/api/models/Instrument/Instrument";
import InstrumentItem from "src/screens/Instruments/components/InstrumentItem";
import AppDivider from "commons/components/AppDivider/AppDivider";
import AppText from "commons/components/AppText/AppText";
import { AppColors } from "commons/utils/AppColors";
import AppSpinner from "commons/components/AppSpinner/AppSpinner";
import AppSvgImage from "commons/components/AppSvgImage/AppSvgImage";

type SearchResultProps = {
  results: InstrumentTO[];
  loading: boolean;
};

const SearchResult = ({ results, loading }: SearchResultProps) => {
  if (loading) {
    return (
      <View style={styles.loading}>
        <AppSpinner />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      {results.length > 1 && (
        <View style={styles.stylesContainer}>
          <AppText color={AppColors.mediumGray} type="p2">
            Results
          </AppText>
        </View>
      )}
      <FlatList
        data={results}
        style={{ flex: 1}}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <InstrumentItem {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={AppDivider}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           
            <AppSvgImage name="searching" />
            <AppText type="h2" align="center" style={{ color: "white" }}>
            Type something to view results here.
            </AppText>
          </View>
        }
        contentContainerStyle={{ flexGrow: 1 }}

      />
    </View>
  );
};

export default SearchResult;

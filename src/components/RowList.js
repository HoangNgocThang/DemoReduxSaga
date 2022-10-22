import React, { Children } from 'react'
import { View, Text } from 'react-native'

function RowList({ children }) {
  const result = [];
  return (
    <View>
      <Text>Total rows: {Children.count(children)}</Text>
      {Children.map(children, (child, index) => {
        console.log('cc', child, index)
        return (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor:index%2==0 ? 'grey':'yellow',
              marginTop: 10,

            }}>
            {child}
          </View>
        )
      }
      )}

      {/* {
        Children.forEach(children, (child, index) => {
          return (
            <View style={{
              flexDirection: 'row',
              backgroundColor: 'grey',
              marginTop: 10
            }}>
              {child}
            </View>
          )
        })
      } */}
    </View>
  );
}

export default RowList;
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import AnimatedView from './AnimatedView';

class About extends Component {
  
  componentWillMount(){
    let { changeColor, changeActiveSpace } = this.props;
    changeActiveSpace('help');
    changeColor('#5a9ce2');
  }
  render(){
    return(
      <AnimatedView>
        <Text style={styles.text}>About</Text>
      </AnimatedView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 100,
  }
});

export default About

// import React, { Component } from 'react';
// import { AppRegistry, SectionList, StyleSheet, View, Text, Image } from 'react-native';
// import AnimatedView from './AnimatedView';

// export default class About extends Component {
//   componentWillMount(){
//     let { changeColor, changeActiveSpace } = this.props;
//     changeActiveSpace('about');
//     changeColor('#5a9ce2');
//   }

//   render() {
//     return (
//       <AnimatedView style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: [{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},
//             {name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},
//             {name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},
//             {name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},
//             {name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Devin', url: 'https://loremflickr.com/320/240?=' + Math.random()}, {name: 'Donal', url: 'https://loremflickr.com/320/240?=' + Math.random()}]},
//             {title: 'J', data: [{name: 'Jackson', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jennyfer', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jacques', url: 'https://loremflickr.com/320/240?=' + Math.random()},{name: 'Jules', url: 'https://loremflickr.com/320/240?=' + Math.random()},]},
//           ]}
//           renderItem={({item}) => 
//             <View style={styles.itemContainer}>
//               <Image style={styles.image} source={{ uri: item.url }} />
//               <Text style={styles.item}>{item.name}</Text>
//             </View>
//           }
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </AnimatedView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
    
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '500'
//   },
//   image: {
//     width: 65,
//     height: 65,
//     margin: 5,
//   },
//   itemContainer: {
//     display: 'flex',
//     flex: 1,
//     flexDirection: 'row',
//   },
//   sectionHeader: {
//     flex: 1,
//     paddingTop: 20,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 20,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     height: 70,
//     lineHeight: 70,
//     padding: 2,
//     fontSize: 18,
//     borderBottomWidth: 1,
//     borderBottomColor: '#efefef',
//   },
// });

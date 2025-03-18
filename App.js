import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TextInput} from 'react-native';
import Feather from '@expo/vector-icons/Feather';



const elements = [
  {
    id: 1,
    title: "Exercise",
    subTitle: "12 Tasks",
    image: require('./assets/young woman working online.png')
  },
  {
    id: 2,
    title: "Study",
    subTitle: "12 Tasks",
    image: require ('./assets/young woman working at desk.png')

  }, 
  {
    id: 3,
    title: "Work",
    subTitle: "12 Tasks",
    image: require('./assets/young woman working online.png')},

  {
    id: 4,
    title: "Code",
    subTitle: "12 Tasks",
    image: require('./assets/young woman working online.png')
  }
];

const components = [
  {
    id: 1,
    title: "Mobile App Development",

  }, 

  {
    id: 2,
    title: "Web Development",
  },

  {
    id : 3,
    title: "Push Ups",
  },
  {
    id: 4,
    title: "Squats",
  },
  {
    id: 5,
    title: "Sit Ups",
  },
  {
    id: 6,
    title: "Jumping Jacks",
  },
  {
    id: 7,
    title: "Planks",
  },
  {
    id: 8,
    title: "Lunges",
  },
  {
    id: 9,
    title: "Bicep Curls",
  },
  {
    id: 10,
    title: "Tricep Dips",
  },
  {
    id: 11,
    title: "Shoulder Press",
  },
  {
    id: 12,
    title: "Leg Press",
  },
  {
    id: 13,
    title: "Leg Curls",
  },
  {
    id: 14,
    title: "Leg Extensions",
  },
  {
    id: 15,
    title: "Deadlifts",
  },
  {
    id: 16,
    title: "Bench Press",
  },
  {
    id: 17,
    title: "Chest Flys",
  },
  {
    id: 18,
    title: "Pull Ups",
  },
  {
    id: 19,
    title: "Lat Pulldowns",
  },
  {
    id: 20,
    title: "Seated Rows",
  },
  {
    id: 21,
    title: "Shoulder Flys",
  },
  {
    id: 22,
    title: "Shoulder Shrugs",
  },
  {
    id: 23,
    title: "Shoulder Press",
  },
  {
    id: 24,
    title: "Shoulder Raises",
  },
  {
    id: 25,
    title: "Shoulder Extensions",
  },
  {
    id: 26,
    title: "Shoulder Pulls",
  },
  {
    id: 27,
    title: "Shoulder Pushes",
  },
  {
    id: 28,
    title: "Shoulder Lifts",
  },
  {
    id: 29,
    title: "Shoulder Curls",
  },
  {
    id: 30,
    title: "Shoulder Dips",
  },
  {
    id:
    31,
    title: "Shoulder Raises",
  }
];


export default function App() {

  
  return (
    <View style={styles.container}>
      <View style ={styles.header}>
        <View>
          <Text style = {styles.title}>Hello, Devs</Text>
          <Text style = {styles.subText}>14 Tasks Today</Text>
        </View>

        <View style = {styles.profileIcon}>
          <Image source = {require('./assets/person.png')} style = {styles.profileIcon}></Image>
        </View>

      </View>
      <View style = {styles.filterContainer}>
        <TextInput
        placeholder = "Search"
        style = {styles.input}
        placeholderTextColor = "black">

        </TextInput>
        <View style = {styles.filter}>
          <Image source = {require('./assets/Filter.png')} style = {styles.filter}></Image>
        </View>
      </View>
      <Feather name="search" size={16} color="black" style = {styles.searchIcon}/>

      <Text style = {styles.categories}>Categories</Text> 

      <View style = {styles.flatContiner}>
          <FlatList
          data={elements}
          keyExtractor={(item)=>item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          
          renderItem={({item}) => (
            <View style = {styles.one}>
              <Text style = {styles.FlatTitle}>{item.title}</Text>  
              <Text style = {styles.subTitle}>{item.subTitle}</Text>
              <Image source = {item.image} style = {styles.renderImage} />
            </View>
          
          )
          }
          style = {styles.flat}

          ></FlatList>
        </View>

        <Text style = {styles.categories}>Ongoing Task</Text> 

        <View>
          <FlatList
          data={components}
          keyExtractor={(item)=>item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style = {styles.two}>
              <Text style = {styles.twoText}>{item.title}</Text> 
            </View>
          
          )
          }
          />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 52
  },
  
  profileIcon: {
    width: 50,
    height: 52,
    borderRadius: 100,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  header: {
    display: 'flex',
    marginLeft: 20,
    marginRight: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 45,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
  }, 

  subTitle: {
    fontWeight: 'medium',
    fontSize: 12,
    marginLeft: 16,

  },

  subText: {
    fontWeight: 'medium',
    fontSize: 12,
  },

  categories: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
   
  },
  flatList: 
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  searchIcon: {
    position: 'absolute',
    top: 156,
    left: 31
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  filter: {
    width: 50,
    height: 48,
    backgroundColor: '#F8522F',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  one: {
    width: 186,
    height: 192,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 24,
  },

  flatContiner: {
    marginTop: 12
  },

  FlatTitle: {
    fontWeight: 'bold',
    fontSize: 16, 
    marginTop: 14,
    marginLeft: 16,
  },

  flat: {
    paddingTop: 14,
    paddingleft: 16,
  },
  renderImage: {
    marginLeft: 21,
  },
  two : {
    width: 354,
    height: 128,
    backgroundColor:'#E8D1BA',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 12,
    
  },
  twoText: {
    fontSize: 16,
    marginLeft: 16,
    marginTop: 14,
    paddingTop: 36,
    fontWeight: 'bold',
  },


});

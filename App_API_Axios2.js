import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getDataMovie = async ()=>{
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies)
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect (()=>{
    getDataMovie();
  },[]) //[] เรียกหนึ่งครั้งตอนเปิดเท่านั้น

  return (
    <View style = {{flex:1, padding:24}}>
      { isLoading 
      ? <ActivityIndicator/> 
      : ( <FlatList
        data={data}
        keyExtractor={({id},index)=>id}
        renderItem = {({item})=>(
          <Text>
            {item.title}, {item.releaseYear}
          </Text>
        )}
      />
      )
      }
    </View>
  );
};

export default App;

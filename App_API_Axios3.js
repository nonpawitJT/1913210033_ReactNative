import { View, Text, ActivityIndicator , FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const getDataNews = async ()=>{
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23');
      const json = await response.json();
      setData(json.articles)
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect (()=>{
    getDataNews();
  },[])

  return (
    <View style = {{flex:1, padding:24}}>
      { isLoading 
      ? <ActivityIndicator/> 
      : ( <FlatList
        data={data}
        keyExtractor={({id},index)=>id}
        renderItem = {({item  })=>(
          <Text>
            {item.title}, {item.source.name}, {item.publishedAt}
          </Text>
        )}
      />
      )
      }
    </View>
  )
}
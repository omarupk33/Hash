import {LinkedList} from "./linked.mjs"



export function HashMap(){

  let load_factor = 0.75
  let capacity = 16
  let bucket = {}



function hash(key){
  let hashCode = 0
  const primeNumber = 31
  for (let i = 0; i < key.length; i++){
    hashCode = (primeNumber * hashCode  + key.charCodeAt(i)) % capacity
  }

  return hashCode;
} 
  function hashSet(key, value){

      if(capacity * load_factor < length()){
      capacity = capacity*2
    }

    let linked = new LinkedList()
    linked.append(key, value)

    let index = hash(key)
      if (index < 0 || index >= capacity) {
        throw new Error("Trying to access index out of bounds")
      }
      else if( index in bucket){
        if(bucket[index].containsKey(key)){
          bucket[index].removeAt(bucket[index].findIndex(key))
        }
        bucket[index].append(key, value)
      }

     else{bucket[index] = linked}

    }

    function get(key){
      let index = hash(key)

        if(index in bucket){
          if(bucket[index].containsKey(key))
          return bucket[index].at(bucket[index].findIndex(key))
          }

        return null
    }

    function has(key){
      let index = hash(key)

      if(index in bucket){
        if(bucket[index].containsKey(key))
        return true
      }

        return false 
    }

    function removePair(key){
      let index = hash(key)

        if(index in bucket){
          if(bucket[index].containsKey(key))
            bucket[index].removeAt(bucket[index].findIndex(key))
            return true
          }

        return false
    }

    function length(){
      let count = 0
      for(let linkedList of Object.values(bucket)){
        count+= linkedList.size()
      }
      return count
    }
    function clear(){
      bucket = {}
      return bucket
    }

    function keys(){

      let allKeys = []
      for(let linkedList of Object.values(bucket)){
        allKeys.push(...linkedList.keys())
      }
      return allKeys
    }
    function values(){
      let allvalues = []
      for(let linkedList of Object.values(bucket)){
        allvalues.push(...linkedList.values())
      }
      return allvalues
    }
    function entries(){
      let allEntries = []
      for(let linkedList of Object.values(bucket)){
        allEntries.push(...linkedList.entries())
      }
      return allEntries
    }


   return {bucket, hashSet, has,removePair, capacity,
          get, length, keys, values, entries, clear}
 }

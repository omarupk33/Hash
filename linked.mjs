class node{
  constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
  }
}
export class LinkedList{
    constructer(){
        this.head = null
    }

    theHead(){
        return this.head
    }

    append(key ,value){
        let new_node = new node(key ,value)
        if (!this.head){
        this.head = new_node
        return
        }
        
        let tailNode = this.tail()
        tailNode.next = new_node
    }

    prepend(key ,value){
        const new_node = new node(key ,value)        
        if(!this.head){
        this.head = new_node
        return
        }
        
        let first_element = this.head

        this.head = new_node
        new_node.next = first_element
    }

    size(){
        let count = 0
        if(!this.head){
            return undefined
        }
        let tmp = this.head
        while(tmp){
            count+=1
            tmp = tmp.next 
        }
        return count
    }

    tail(){
        if(!this.head){
            return undefined
        }

        let tmp = this.head
        while(tmp && tmp.next){
            tmp = tmp.next
        }
        return tmp
    }
    at(index){
        let current_index = 0
        let tmp = this.head
        while(tmp){
            if(current_index === index){
                return tmp.value
            }
            current_index +=1
            tmp = tmp.next
        }
        return undefined
    }

    pop(){
        if(!this.head){
            return undefined
        }

        const popHead = this.head
        this.head = this.head.next

        return popHead.value
    }

    containsKey(key){
        if(!this.head){
            return undefined
        }

        let tmp = this.head
        while(tmp){
            if(tmp.key === key){
                return true
            }
            tmp = tmp.next
        }

        return false
    }

    findIndex(key){
        let index = 0 
        if(!this.head){
         return undefined
        }
        let tmp = this.head
        while(tmp){
            if(tmp.key === key){
                return index
            }
            index+=1
            tmp = tmp.next
        }
        return -1
    }

    toString(){
        let addToString = ''
        if(!this.head){
         return ''
        }
        let tmp = this.head
        while(tmp){
            addToString+= `( ${tmp.value} )-> `
            tmp = tmp.next
        }
        addToString+= 'null'
    
    return addToString
    }
    insertAt(index, ...values){
        if(index >= this.size() || index < 0){
            throw new RangeError()
        }




        let curr = this.head
        let prev = null

        if(index === 0){
            for(let val of values.reverse()){
            let inserted_node = new node(val)
            this.prepend(inserted_node.value)
        }
        return this.head
        }
 

        while(curr && curr.next && curr.value !== this.at(index)){
            prev = curr
            curr = curr.next
        }

        prev = curr
        curr = curr.next
        for(let val of values){
            let inserted_node = new node(val)
            prev.next = inserted_node
            prev = inserted_node
        }
        prev.next = curr
        return this.head

    }
    removeAt(index){
        if(index >= this.size() || index < 0){
            throw new RangeError()
        }

        if(index === 0){
            this.pop()
            return this.head
        }

        let curr = this.head
        let prev = null

        while(curr && curr.next && curr.value !== this.at(index)){
            prev = curr
            curr = curr.next
        }
        curr = curr.next
        prev.next = curr
        return this.head
    }
    clearList(){
        if(!this.head){
            return undefined
        }
        this.head.next = null
        return this.head
    }
}
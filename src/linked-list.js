const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        if(this.length===0)
        {
            let elem=new Node(data, null, null);
            this._head=elem;
            this._tail=elem;
        }
        else
        {
            let elem=new Node(data, this._tail, null);
            this._tail.next=elem;
            this._tail=elem;
        }
        this.length++;
        return this;
    }

    head() {
        if(this.length>0) return this._head.data;
        return null;
    }

    tail() {
        if(this.length>0) return this._tail.data;
        return null;
    }

    at(index) {
        let a=this._head;
        for(let i=0;i<index;i++)
        {a=a.next;}
        return a.data;
    }

    insertAt(index, data) {
        let a=this._head;
        for(let i=0;i<index;i++)
        {a=a.next;}
        if(index===0){
            let elem=new Node(data, null, this._head);
            this._head.prev=elem;
            this._head=elem;
        }
        else{
            if(index===this.length){
                this.append(data);  
            }
            else { if(this.length===0) {this.append(data); return this;}
                let elem=new Node(data, a.prev, a);
                a.prev.next=elem;
                a.prev=elem;
            }
        }
        return this;    
    }

    isEmpty() {
        if(this._head==null) return true;
        return false;
    }

    clear() {
        let prepare_to_kill=this._head.next;
        let killer=this._head.next;
        while(killer.next!==null)
        {
            prepare_to_kill=prepare_to_kill.next;
            killer=null;
            killer=prepare_to_kill;
        }
        this.length=0;
        this._head=null;
        this._tail=null;
        return this;
    }

    deleteAt(index) {
        let a=this._head;
        for(let i=0;i<index;i++)
        {a=a.next;}
        if(index===0)
        {
            this._head=this._head.next;
            this._head.prev=null;
            a=null;
        }
        else{
            if(a==this._tail)
            {
                this._tail=this._tail.prev;
                this.tail.next=null;
                a=null;
            }
            else{
                a.prev.next=a.next;
                a.next.prev=a.prev;
                a=null;
            }
        this.length--;
        }
        return this;
    }

    reverse() 
    {   if(this.length<2) return this;
        let elem=this._head;
        let next=null;
        let prev=null;
        while(elem!==null)
        {
            next=elem.prev;
            prev=elem.next;
            elem.prev=prev;
            elem.next=next;
            elem=elem.prev;
        }
        let buf=this._head;
        this._head=this._tail;
        this._tail=buf;
        return this;
    }

    indexOf(data) {
        let a=this._head;
        let i=0;
        while(a!==null)
        {
            if(a.data==data) return i;
            a=a.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;

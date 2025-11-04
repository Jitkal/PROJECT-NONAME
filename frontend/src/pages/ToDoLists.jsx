import React, {useEffect, useState} from 'react';
import List from "../components/List.jsx";

const addNewList = (allList, setAllList,newActivity,newType) => {
    if (newActivity && newType) {
        const list= allList;
        const newItem = {
                activity: newActivity,
                type: newType,
                isComplete: false
        };
        list.push(newItem);
        setAllList(list)
        localStorage.setItem('lists', JSON.stringify(list));
    }
    console.log('newActivity', newActivity);
    console.log('newType', newType);
    console.log('allList',allList)
}

const ToDoLists = () => {
    const [newList, setNewList] = useState({})
    const [newActivity, setNewActivity] = useState('')
    const [newType, setNewType] = useState('')
    const [allList, setAllList] = useState(JSON.parse(localStorage.getItem('lists')) || [])
    useEffect(()=>{
        console.log('allList',allList)
    },[newList])
  return (
    <div>
        <div>
            <div>Today</div>
            <div>{new Date().toLocaleDateString()}</div>
        </div>
        <div>
            {
                allList && allList.length > 0 ? (
                    allList.map((item, index) => (
                        <List key={item.created || index} item={item}/>
                    ))
                ) : (
                    <div>no list</div>
                )
            }
            <List/>
        </div>
        <div>
            <div className='bg-amber-400 w-fit'>
                add new list
            </div>
            <div className='flex flex-col'>
                <input type="text" placeholder='activity' value={newActivity} onChange={(e) => setNewActivity(e.target.value)}/>
                <input type="text" placeholder='type' value={newType} onChange={(e) => setNewType(e.target.value)}/>
                <button onClick={() =>addNewList(allList, setAllList, newActivity,newType)}>submit</button>
                {newActivity}
            </div>
        </div>
    </div>
  );
};

export default ToDoLists;

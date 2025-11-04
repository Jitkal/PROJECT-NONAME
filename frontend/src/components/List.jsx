import React, {useEffect, useState} from 'react';


const List = ({item}) => {
    const [isComplete, setIsComplete] = useState(false);
    if (item) {
        console.log('item', item);
    }
    useEffect(() => {
        console.log('isComplete', isComplete);
    },[isComplete])

  return (
      <div>
        {
            item ?
                !isComplete ?
                  <div className="block p-6 my-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="flex gap-4 items-center">
                          <div>
                              <input type="checkbox" value={isComplete} onChange={() => setIsComplete(!isComplete)}/>
                          </div>
                          <div>
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  {item?item.activity:'none'}
                              </h5>
                              <p className="font-normal text-gray-700 dark:text-gray-400">
                                  {item?item.type:'none'}
                              </p>
                          </div>
                      </div>
                  </div>
                :<div/>
            :<div/>
        }
      </div>

  );
};

export default List;

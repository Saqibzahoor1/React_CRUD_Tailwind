
import { useEffect, useState } from 'react';
import './App.css';
import { data } from './employee';
function App() {
  const [alldata, setAlldata] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isupdate, setIsupdate] = useState(false)

  useEffect(() => {
    setAlldata(data);
  }, [])
  // Edit Function
  const handeledit = (id) => {
    const edit = alldata.filter(item => item.id === id);
    if (edit !== undefined) {
      setIsupdate(true)
      setId(id);
      setFirstname(edit[0].firstName);
      setLastname(edit[0].lastName);
      setAge(edit[0].age);
    }
  }
  // Add Function
  const handleadd = (e) => {
    let error = '';
    if (firstname === '')
      error += 'firstname is required,';
    if (lastname === '')
      error += 'lastname is required,'
    if (age <= 0)
      error += 'age is required.'

    if (error === '') {
      e.preventDefault();
      const add = [...alldata];
      const newobject = {
        id: data.length + 1,
        firstName: firstname,
        lastName: lastname,
        age: age
      }
      add.push(newobject);
      setAlldata(add)
    }
    else {
      alert(error);
    }

  }

  const handleupdate = () => {
    const index = alldata.map((item) => {
      return item.id
    }).indexOf(id)
    const update = [...alldata];
    update[index].firstName = firstname;
    update[index].lastName = lastname;
    update[index].age = age;
    setAlldata(update);
    handleclear();
  }
  // Clear Function
  const handleclear = () => {
    setId(0);
    setFirstname('');
    setLastname('');
    setAge('');
    setIsupdate(false)
  }
  // Delete Function
  const handledelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are You Sure To Delete!")) {
        const Deleteitem = alldata.filter(item => item.id !== id)
        setAlldata(Deleteitem)
      }

    }
  }
  return (
    <div className="App">


      <div className='flex justify-center items-center my-3.5	'>
        <label className='pr-4'>FirstName
          <input type='text' className='border-2 border-inherit' onChange={(e) => setFirstname(e.target.value)} value={firstname} />
        </label>
        <label className='pr-4'>LastName
          <input type='text' className='border-2 border-inherit' onChange={(e) => setLastname(e.target.value)} value={lastname} />
        </label>
        <label className='pr-4'>Age
          <input type='number' className='border-2 border-inherit' onChange={(e) => setAge(e.target.value)} value={age} />
        </label>
        {
          !isupdate ? <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={(e) => handleadd(e)}>Add</button> : <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleupdate()}>Update</button>
        }


        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => handleclear()}>Clear</button>
      </div>


      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                firstName
              </th>
              <th scope="col" class="px-6 py-3">
                lastName
              </th>
              <th scope="col" class="px-6 py-3">
                age
              </th>
              <th scope="col" class="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((item, index) => {
                return (
                  <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700    ">
                    <td class="px-6 py-4">{item.id}</td>
                    <td class="px-6 py-4">{item.firstName}</td>
                    <td class="px-6 py-4">{item.lastName}</td>
                    <td class="px-6 py-4">{item.age}</td>
                    <td class="">
                      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handeledit(item.id)}>Edit</button> <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handledelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                )



              })
            }

          </tbody>
        </table>
      </div>








    </div>
  );
}

export default App;

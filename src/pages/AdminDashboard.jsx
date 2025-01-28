
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled('button')`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
);

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const [userToBeEdited,setUserToBeEdited]=useState({});
    const filteredItems = users.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const [isModalOpen, setModalOpen] = useState(false);

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
            width: '70px',
        },
        {
            name: 'Name',
            selector: row => row.fname + " " + row.lname,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            width: '120px',

        },
        {
            name: 'password',
            selector: row => row.password,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            wrap: true,
            width: '150px',

        },
        {
            name: "Actions",
            cell: (row) => <Actions row={row} />
        }
        // {
        //     name: 'city',
        //     selector: row => row.city,
        //     sortable: true,
        //     width: '120px',
        // },
        // {
        //     name: 'state',
        //     selector: row => row.state,
        //     sortable: true,
        //     width: '120px',
        // },
        // {
        //     name: 'pincode',
        //     selector: row => row.pincode,
        //     sortable: true,
        //     width: '120px',
        // },
    ];
    const Actions = ({ row }) => {
        return (
            <>
                <button className='bg-blue-600 rounded p-2 ml-1' onClick={() => toggleModal(row)}>Edit</button>
                <button className='bg-red-600 rounded p-2 ml-1' onClick={() => deleteUser(row)}>Delete</button>
            </>
        )
    }
    const toggleModal = async (userRow) => {
        setModalOpen(true);
        setUserToBeEdited(userRow);
    }
    const editUser=async (user) => {
        try {
            const res=await axios.put(import.meta.env.VITE_USERS_URL+"/"+user.id,user);
            console.log("edited",res);
            setUsers(users.map(u=>{
                if (u.id===user.id) {
                    return user;
                }
                else
                {
                    return u;
                }
            }));
            if (res.status === 200) {
                toast.success("user edited succesfully!");
            }
            else {
                toast.error("unable to delete user!");
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteUser = async (userRow) => {
        try {
            const res = await axios.delete(import.meta.env.VITE_USERS_URL + "/" + userRow.id);
            // console.log("deleted",res);
            setUsers(users.filter(u => u.id !== res.data.id));
            if (res.status === 200) {
                toast.success("user deleted succesfully!");
            }
            else {
                toast.error("unable to delete user!");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    const getAllUsers = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_USERS_URL);
            const users = await res.data;
            setUsers(users);
            console.log("all users in backend:", users);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllUsers();
    }, [])

    useEffect(() => {
    }, [users])



    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);



    return (
        <div className="w-[80%] mx-auto bg-slate-600 h-[80vh]">
            {isModalOpen && <EditModal setModalOpen={setModalOpen} userToBeEdited={userToBeEdited} editUser={editUser}/>}
            <ToastContainer />
            <DataTable
                title="Users List"
                columns={columns}
                data={users}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />
        </div>
    )
}

export default AdminDashboard


const EditModal = ({ setModalOpen,userToBeEdited,editUser }) => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const onSubmit = async data => {
        console.log("submitting..", data); 
        editUser(data);
        setModalOpen(false);
    }
    useEffect(()=>{
        reset(userToBeEdited);
    },[]);
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">Edit User details</h3>
                                    <div className="mt-2">
                                        <form className="p-3 w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="space-y-3">
                                                <div className="border-b border-gray-900/10 pb-12">
                                       
                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                                                        <div className="sm:col-span-3">
                                                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                                                            <div className="mt-2">
                                                                <input type="text" name="first-name" id="first-name" {...register("fname", {
                                                                    required: "This field is required", minLength: {
                                                                        value: 2,
                                                                        message: "atleast 2 characters are required!"
                                                                    },
                                                                    pattern: {
                                                                        value: /^[A-Za-z]+$/i,
                                                                        message: "no digits or special characters are allowed"
                                                                    }
                                                                })} autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.fname && <span className="text-red-600">{errors.fname?.message}</span>}
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-3">
                                                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                                                            <div className="mt-2">
                                                                <input type="text" name="last-name" id="last-name" {...register("lname", { required: "This field is required" })} autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.lname && <span className="text-red-600">{errors.lname?.message}</span>}

                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-4">
                                                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                                                            <div className="mt-2">
                                                                <input id="email" name="email" type="email" {...register("email", { required: "This field is required" })} autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.email && <span className="text-red-600">{errors.email?.message}</span>}

                                                            </div>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                                            <div className="mt-2">
                                                                <input id="password" name="password" type="password" {...register("password", { required: "This field is required" })} autoComplete="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
                                                            </div>
                                                        </div>
                                                        <div className="col-span-full">
                                                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Full Address</label>
                                                            <div className="mt-2">
                                                                <input type="text" name="street-address" id="street-address" {...register("address", { required: "This field is required" })} autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.address && <span className="text-red-600">{errors.address?.message}</span>}

                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2 sm:col-start-1">
                                                            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">City</label>
                                                            <div className="mt-2">
                                                                <input type="text" name="city" id="city" {...register("city", { required: "This field is required" })} autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.city && <span className="text-red-600">{errors.city?.message}</span>}

                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
                                                            <div className="mt-2">
                                                                <input type="text" name="region" id="region" {...register("state", { required: "This field is required" })} autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.state && <span className="text-red-600">{errors.state?.message}</span>}

                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
                                                            <div className="mt-2">
                                                                <input type="text" name="postal-code" id="postal-code" {...register("pincode", { required: "This field is required" })} autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                                {errors.pincode && <span className="text-red-600">{errors.pincode?.message}</span>}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={()=>setModalOpen(false)}>Cancel</button>
                                                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => setModalOpen(false)}>Deactivate</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setModalOpen(false)}>Cancel</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}
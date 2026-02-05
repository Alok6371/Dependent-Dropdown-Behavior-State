import React, { useEffect, useState } from 'react'

const states = [
    {
        "stateName": "Odisha",
        "districts": [
            {
                "districtName": "Ganjam",
                "blocks": [
                    {
                        "blockName": "Brahmapur",
                        "pincodes": ["760001", "760002", "760003"]
                    },
                    {
                        "blockName": "Chhatrapur",
                        "pincodes": ["761020", "761021"]
                    }
                ]
            },
            {
                "districtName": "Khordha",
                "blocks": [
                    {
                        "blockName": "Bhubaneswar",
                        "pincodes": ["751001", "751002", "751003"]
                    },
                    {
                        "blockName": "Jatni",
                        "pincodes": ["752050", "752051"]
                    }
                ]
            }
        ]
    },
    {
        "stateName": "Andhra Pradesh",
        "districts": [
            {
                "districtName": "Visakhapatnam",
                "blocks": [
                    {
                        "blockName": "Gajuwaka",
                        "pincodes": ["530026", "530027"]
                    },
                    {
                        "blockName": "Anakapalle",
                        "pincodes": ["531001", "531002"]
                    }
                ]
            },
            {
                "districtName": "Vijayawada",
                "blocks": [
                    {
                        "blockName": "Patamata",
                        "pincodes": ["520010", "520011"]
                    },
                    {
                        "blockName": "Benz Circle",
                        "pincodes": ["520008"]
                    }
                ]
            }
        ]
    },
    {
        "stateName": "Telangana",
        "districts": [
            {
                "districtName": "Hyderabad",
                "blocks": [
                    {
                        "blockName": "Secunderabad",
                        "pincodes": ["500003", "500009"]
                    },
                    {
                        "blockName": "Charminar",
                        "pincodes": ["500002", "500012"]
                    }
                ]
            },
            {
                "districtName": "Rangareddy",
                "blocks": [
                    {
                        "blockName": "Shamshabad",
                        "pincodes": ["501218", "501220"]
                    },
                    {
                        "blockName": "Kukatpally",
                        "pincodes": ["500072", "500085"]
                    }
                ]
            }
        ]
    }
]

const LocationDropDown = () => {
    const [state, setState] = useState('')
    const [district, setDistrict] = useState('')
    const [block, setBlock] = useState('')
    const [pincode, setPincode] = useState('')


    const selctedState = states.find(e => e.stateName === state)

    const selectedDistinct = selctedState ? selctedState.districts.find(e => e.districtName === district) : ""

    const selectedBlock = selectedDistinct ? selectedDistinct.blocks.find(e => e.blockName === block) : ""

    // const valueForLocalStroge = [state, district, block, pincode]

    // useEffect(() => {
    //     localStorage.setItem("data", JSON.stringify(valueForLocalStroge))
    //     console.log((getItemLocalStroge.state));
    // }, [pincode])

    // const getItemLocalStroge = JSON.parse(localStorage.getItem("data"))

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state) {
            setState('')
            setDistrict('')
            setBlock('')
            setPincode('')
            console.log(state, district, block, pincode);
            alert("Data Submitted")
        }
        else {
            alert("Select Your Location")
        }

    }


    return (


        <div className='p-[5vh]'>
            <div className='flex gap-3  '>
                {/* Select the State */}

                <select
                    className='bg-green-400 rounded-lg border-none p-3 '
                    value={state}
                    onChange={(e) => {
                        setState(e.target.value);
                        setDistrict('')
                        setBlock('')
                        setPincode('')
                    }
                    }
                >
                    <option > Selct State</option>
                    {
                        states.map((sta) => (
                            <option>
                                {sta.stateName}
                            </option>
                        ))
                    }
                </select>

                {/* select th  Distinct */}
                <select
                    className='bg-green-400 rounded-lg  ronunded-lg p-3'
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                >
                    <option >
                        Select Distinct
                    </option>
                    {
                        selctedState ? selctedState.districts.map((dis) => (
                            <option >{dis.districtName}</option>
                        )) : ""
                    }
                </select>

                {/* select the  Block*/}
                <select
                    className='bg-green-400  rounded-lg ronunded-lg p-3'
                    value={block}
                    onChange={(e) => setBlock(e.target.value)}
                >
                    <option >Select Block</option>
                    {
                        selectedDistinct ? selectedDistinct.blocks.map((blo) => (
                            <option >{blo.blockName}</option>
                        )) : ""
                    }
                </select>


                {/* selct PinCode */}
                <select
                    className='bg-green-400 rounded-lg ronunded-lg p-3'
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                >
                    <option>Select PinCode</option>
                    {
                        selectedBlock ? selectedBlock.pincodes.map((pin) => (
                            <option >{pin}</option>
                        )) : ""
                    }
                </select>
            </div>
            <br />
            <div>
                <form action="" onSubmit={handleSubmit}>

                    <h1 className='font-semibold'>You Selcted</h1>
                    <p >
                        State: <nspb />
                        <span className='font-semibold'>
                            {(state)}
                        </span>
                    </p>
                    <p >
                        Distinct: <nspb />
                        <span className='font-semibold'>
                            {(district)}
                        </span>
                    </p>
                    <p >
                        Block: <nspb />
                        <span className='font-semibold'>
                            {(block)}
                        </span>
                    </p>
                    <p >
                        Pincode: <nspb />
                        <span className='font-semibold'>
                            {(pincode)}
                        </span>
                    </p>
                    <button type='submit' className='bg-blue-300 p-3 mt-2 rounded-lg'>
                        Send Data
                    </button>
                </form>
            </div>


        </div >
    )
}

export default LocationDropDown

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    // console.log(coffee);
    const { _id, name, quantity, suplier, taste, category, details, photo } = coffee
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, suplier, taste, category, details, photo };
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('addeded successfully')
                }
            })

    }
    return (
        <div className='p-24'>
            <h1 className='text-3xl font-extrabold'>Update coffee</h1>

            <form onSubmit={handleUpdate}>
                {/* form row */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text ">Coffee name</span>
                        </label>

                        <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>
                        </label>

                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Coffee quantity" className="input input-bordered w-full" />

                    </div>
                </div>
                {/* form supplier row */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text ">supplier</span>
                        </label>

                        <input type="text" name='suplier' placeholder="suplier" defaultValue={suplier} className="input input-bordered w-full" />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>

                        <input type="text" name='taste' placeholder="taste" defaultValue={taste} className="input input-bordered w-full" />

                    </div>
                </div>

                {/* form category and details  row */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text ">Category</span>
                        </label>

                        <input type="text" name='category' placeholder="Category" defaultValue={category} className="input input-bordered w-full" />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>

                        <input type="text" name='details' placeholder="Details" defaultValue={details} className="input input-bordered w-full" />

                    </div>
                </div>
                {/* Photo url  row */}
                <div className='mb-4'>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text ">photo url</span>
                        </label>

                        <input type="text" name='photo' placeholder="photo url" defaultValue={photo} className="input input-bordered w-full" />

                    </div>

                </div>
                <input type='submit' value='Update Coffee' className='btn btn-block'></input>
            </form>
        </div>
    );
};

export default UpdateCoffee;
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
    let navigate = useNavigate()
    const [Loading, setLoading] = useState(false);
    const [Products, setProducts] = useState([]);
    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await httpServices.get('/products')
            if (response.status) {
                setLoading(false)
                let result = response.data.products.results;
                console.log(response.data.products.results);
                setProducts(result)
                toast.success(response.data.message)
            }
            else {
                toast.success(response.data.message)

            }
        }
        catch (e) {
            setLoading(false)
            toast.error(e.message)
        }
    }
    const deleteProduct = async (_id) => {
        try {
            const response = await httpServices.delete('/products/' + _id)
            if (response.status) {
                setLoading(false)
                let result = response.data.products.results;
                console.log(response.data.products.results);
                toast.success(response.data.message)
                window.location.reload();



            }
            else {
                toast.success(response.data.message)
            }
        }
        catch (e) {
            setLoading(false)
            toast.error(e.message)

        }
    }
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <div className="page-body ">
            <div className="product-cont">
                <div className="col-xl-12 xl-100">
                    <div className="card height-equal">
                        
                        <div className="card-header">
                            <h5>Products</h5>
                            <div className="card-header-right">
                                <ul className="list-unstyled card-option">
                                    <li><i className="icofont icofont-simple-left"></i></li>
                                    <li><i className="view-html fa fa-code"></i></li>
                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                    <li><i className="icofont icofont-error close-card"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between bg-white p-3">
                            <form className="form-inline search-form search-box">
                                <div className="form-group">
                                    <input className="form-control-plaintext" type="search" placeholder="Search.." />
                                </div>
                            </form>
                            <Link to="page-create.html" className="btn btn-primary mt-md-0 mt-2">Add New Page</Link>
                        </div>
                        <div className="card-body">
                            <div className="user-status table-responsive products-table">
                                <table className="table table-bordernone mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Slug</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Keywords</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Loading &&
                                            <tr>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={200} height={100} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>

                                            </tr>
                                        }

                                        {Products && Products.map((product) => (<tr key={product._id} >
                                            <td className="img-td" ><img src={product.image.url} alt={product._id + "product"} className="" style={{ width: '118px', height:"77px", borderRadius:'10px' }}></img></td>

                                            <td>{product.name}</td>
                                            <td>{product.slug}</td>
                                            <td>{product.price}</td>
                                            <td>{product.keywords}</td>
                                            <td>{product._id}</td>
                                            <td>
                                                <div className="form-button">
                                                    <Link className="btn btn-primary" to={"/product/" + product._id}>View</Link>
                                                    <div className="form-button m-4 flex" >
                                                        <Link className="" to={"/product/" + product._id}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></Link>
                                                        <Link to="#" className="m-2" onClick={() => { deleteProduct(product._id) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="code-box-copy">
                                <button className="code-box-copy__btn btn-clipboard"
                                    data-clipboard-target="#example-head4" title=""
                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
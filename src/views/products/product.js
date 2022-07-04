import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
const Product = () => {
    let { _id } = useParams();
    const { data, Loading, Error} = useGet('/products/' + _id);
    const Products =data ? data.product : " ";
    console.log(Products);

    useEffect(() => {
    }, [])
    return (
        <>
            <div className="page-body">
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-header-left">
                                    <h3>
                                        Product Detail
                                        <small>Multikart Admin panel</small>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">Physical</li>
                                    <li className="breadcrumb-item active">Product Detail</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container-fluid Ends*/}
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="card">
                        {Loading &&
                            <div className="overflow-hidden d-block p-5">
                                <div className="">
                                    <Skeleton count={1} width={100} height={10} box={true} />
                                    <Skeleton count={1} width={1000} height={5} box={true} />
                                    <Skeleton count={1} width={160} height={8} box={true} />
                                    <Skeleton count={1} width={200} height={8} box={true} />
                                </div>
                                <div className="d-flex p-2">
                                    <Skeleton count={1} width={300} height={100} box={true} />
                                    <div className="d-flex px-2">
                                        <Skeleton count={2} width={100} height={50} box={true} />
                                    </div>
                                </div>
                                <Skeleton count={1} width={200} height={8} box={true} />
                            </div>

                        }
                        {Products && 
                            <div className="row product-page-main card-body">
                                <div className="col-xl-2">
                                <div className="img-td" style={{width:'200px', maxHeight:'200px'}}><img src={Products.image ? Products.image.url : ''} alt={"Products"+Products._id} className="img-fluid"></img></div>

                                </div>
                                <div className="col-xl-8">
                                    <div className="product-page-details product-right mb-0">
                                        <h2>{Products.name}</h2>
                                        <div className="br-wrapper br-theme-fontawesome-stars-o">
                                            <select id="u-rating-fontawesome-o" name="rating" data-current-rating={5} autoComplete="off" style={{ "display": "none" }}>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select>
                                            <div className="br-widget">
                                                <a href="#" data-rating-value={1} data-rating-text={1} className="br-selected" /><a href="#" data-rating-value={2} data-rating-text={2} className="br-selected" />
                                                <a href="#" data-rating-value={3} data-rating-text={3} className="br-selected" /><a href="#" data-rating-value={4} data-rating-text={4} className="br-selected" />
                                                <a href="#" data-rating-value={5} data-rating-text={5} className="br-selected br-current" />
                                            </div>
                                        </div>
                                        <hr />
                                        <h6 className="product-title">product details</h6>
                                        <p>
                                            {Products.description}
                                        </p>
                                        <div className="product-price digits mt-2">
                                            <h3> NGN{Products.price}<del>0000</del></h3>
                                        </div>
                                        <ul className="color-variant">
                                            <li className="bg-light0" />
                                            <li className="bg-light1" />
                                            <li className="bg-light2" />
                                        </ul>
                                        <hr />
                                        <h6 className="product-title size-text">
                                            Dimensions:
                                        </h6>
                                        <div>
                                            width:{Products.dimension.width}
                                        </div>
                                        <hr />
                                        <h6 className="product-title">Description</h6>
                                        <p>{Products.description}</p>
                                        <div className="m-t-15">
                                            <button className="btn btn-primary m-r-10" type="button">Delete</button>
                                            <Link className="btn btn-secondary" to="#">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {Error && <div className="text-center"><h1 className="font-bold fs-3">Unable to fetch data at this monent</h1></div>}

                    </div>
                </div>
                {/* Container-fluid Ends*/}
            </div>

        </>
    );
}

export default Product;
import {gql} from '@apollo/client'
// import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`


export const UPDATE_PRODUCT = gql`
    mutation updateProduct($productId: ID, $updateProductInput: updateProductInput!){
        updateProduct(productId: $productID, updateProductInput: $updateProductInput){
            _id
            number
            message
        }
    }
`
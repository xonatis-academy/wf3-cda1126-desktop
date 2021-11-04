import React from 'react';
import ApiService from './ApiService';

export default React.createContext({
    apiService: new ApiService()
})
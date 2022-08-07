import React, { createContext } from 'react';
import Swal from 'sweetalert2'

export const AppMessagesContext = createContext([]);
const { Provider } = AppMessagesContext;

const AppMessagesProvider = ({ children }) => {

    const showMessage = (message, type = 'info') => {
        Swal.fire({
            icon: type,
            text: message,
            timer: 1500,
            showConfirmButton: true,
        })
    }

    return <Provider value={{showMessage}}>
        {children}
    </Provider>
}

export default AppMessagesProvider;
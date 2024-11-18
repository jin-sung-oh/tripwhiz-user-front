import {Outlet} from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout.tsx";

function CartIndex() {
    return (
        <div>
            <BaseLayout></BaseLayout>
            Cart Index
            <Outlet></Outlet>
        </div>
    );
}

export default CartIndex;
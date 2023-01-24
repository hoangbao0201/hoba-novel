import { loginSuccess, logoutUser } from "@/redux/userSlice";
import setAuthToken from "@/utils/setAuthToken";
import axios from "axios";
import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

export interface HandlePageProps {
    children?: ReactNode;
}
const HandlePage = ({ children }: HandlePageProps) => {
    // ---
    const dispatch = useDispatch();

    const loadUser = async () => {
        if (Cookies.get("A_token")) {
            try {
                setAuthToken(Cookies.get("A_token") as string);

                const resGetMeHandle = await axios.get("/api/users");

                // console.log(Cookies.get("A_token"))

                if (resGetMeHandle.data.success) {
                    dispatch(loginSuccess(resGetMeHandle.data.user));
                } else {
                    dispatch(logoutUser());
                }
            } catch (error) {
                // console.log(error);
                dispatch(logoutUser());
            }
        }
        else {
            dispatch(logoutUser());
        }
    };

    // Load User
    useEffect(() => {
        loadUser();
    }, []);

    // ---

    return <>{children}</>;
};

export default HandlePage;

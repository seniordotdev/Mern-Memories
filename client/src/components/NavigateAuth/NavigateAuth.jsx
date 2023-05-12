import Auth from "../Auth/auth";
import NavigateTo from "../Navigate/Navigate";

export default function NavigateAuth({ user }) {
	return !user ? <Auth /> : <NavigateTo path={"/posts/"} />;
}

import axios from "axios";
import { useEffect, useState } from "react";
import pic from "./utilisateur.png";
import "./users.css";

const UserList = () => {
	const [listOfUSer, setlistOfUSer] = useState([]);
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			setlistOfUSer(response.data);
		});
	}, []);

	return (
		<div className='usersList'>
			{listOfUSer.map((currentUser) => (
				<div className='user' key={currentUser.id}>
					<div className='name-pic'>
						<p>{currentUser.name}</p>
						<img src={pic} alt={currentUser.name} className='profile-pic' />
					</div>
					<div className='other-data'>
						<p>Email : {currentUser.email}</p>
						<p>Phone number : {currentUser.phone}</p>
						<p>Website : {currentUser.website}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserList;

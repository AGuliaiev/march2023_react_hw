
import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
const {register, handleSubmit, reset} = useForm();
    const create = (user) => {

            fetch('https://jsonplaceholder.typicode.com/users', {
                headers: {'content-type':'application/json'},
                method: 'POST',
                body:JSON.stringify(user),
            }).then(value => value.json())
                .then(value => {
                    setUsers(prev => [...prev, value])

        reset()
    })
    }



    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <label>id:
                    <input type="text" placeholder={'id'} {...register('id')}/>
                </label>

                <label>name:
                    <input type="text" placeholder={'name'} {...register('name')}/>
                </label>

                <label>userName:
                    <input type="text" placeholder={'userName'} {...register('userName')}/>
                </label>

                <label>email:
                    <input type="text" placeholder={'email'} {...register('email')}/>
                </label>
                <button>createUser</button>
            </form>


        </div>
    );
};

export default UserForm
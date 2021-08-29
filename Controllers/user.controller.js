import { User } from '../Models';

let user_routes = {};

user_routes.get_user = async (req, res) => {
    try {
        let user = await User.findOne({_id: req.params.userId})
        if(user) {
            return res.status(200).json({ user: user });
        }else{
            return res.status(400).json({message: 'User not found', status: res.statusCode});
        }

    } catch (error) {
        return res.status(400).json({message: error});
    }
};

user_routes.put_user = async (req, res) => {
    try {
        let userId = req.params.userId
        let user = await User.findOne({_id: userId})
        let { name, username, password, last_login} = req.body
        if(user){
            if (name){
                user.name = name
            }
            if(username){
                user.username = username
            }
            if(password){
                user.password = password
            }
            if(last_login){
                user.last_login = last_login
            }
            await User.findByIdAndUpdate(user._id, user, { new: true})
            return res.status(200).json({ message: 'User updated successfully!' , status: res.statusCode });
        }else{
            return res.status(400).json({message: 'User not found', status: res.statusCode});
        }
    } catch (error) {
        return res.status(400).json({message: error});
    }
};

user_routes.delete_user = async (req, res) => {
    try {
        await User.findByIdAndRemove({_id: req.params.userId})
        return res.status(200).json({ message: 'User deleted successfully!', status: res.statusCode });
    } catch (error) {
        return res.status(400).json({message: error});
    }
};

user_routes.post_user = async (req, res) => {
    try {
        await User.create(req.body.user)
        return res.status(201).json({ message: 'User created successfully!', status: res.statusCode});
    } catch (error) {
        return res.status(400).json({message: error});
    }
};

user_routes.get_ok = async (req, res) => {
    try {
        return res.status(200).json({ status: res.statusCode });
    } catch (error) {
        return res.status(400).json({error});
    }
};


export { user_routes };

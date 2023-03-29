import User from '../../model/User.js'
import bcrypt from 'bcrypt';
import registerValidation from '../../validation/register.js';


export const registerUser =
 async (req, res) => {
  
  try {
    const { error } = registerValidation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const {
      firstname,
      lastname,
      email,
      password,
      phoneNumber,
      companyId,
      companyName,
      businessType,
      address,
      noOfEmployee,
      registrationNo,
      role,
      profilephoto
    } = req.body;

    const existingUser = await User.findOne(email );
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      phoneNumber,
      companyId,
      companyName,
      businessType,
      address,
      noOfEmployee,
      registrationNo,
      role,
      profilephoto
    });

    res.status(201).json({
      status: "success",
      data: user 
    });
  } catch (error) {
    console.log(error, '')
    res.status(500).json({ message: 'Something went wrong' });
    console.error(error);
  }
};

// export default register;
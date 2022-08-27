/** source/server.ts */
import http from 'http';
import express, {application, Express} from 'express';
import morgan from 'morgan';
import pationRoutes from './routes/patientdata';
import medDataRoutes from './routes/MedData';
import personRoutes from './routes/personRoutes';
import db from './config/database.config'

db.sync().then(() => {
    console.log("connect to db")
})



const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', pationRoutes);
router.use('/', medDataRoutes)
router.use('/', personRoutes)

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

/** Insert data */

// console.log("All models were synchronized successfully.");
//     Role.create({id:0, auth: 'ROLE_APOTHEKER'})
//     Role.create({id:1, auth: 'ROLE_PATIENT'})
//     Role.create({id:2, auth: 'ROLE_DOCTER'})
//
//     // Docter
//     Person.create({id:0, userName: 'docter', password: 'docter1', patientDataId: undefined, roleId: 3})
//
//     // Apotheker
//     Person.create({id:1, userName: 'apotheker', password: 'apotheker1', patientDataId: undefined, roleId: 1})
//
//     // Person
//     MedData.create({id:0, doctorId:0, dateOfIssue: new Date().toString(), drug: 'Testdrug', validUntil: new Date().toString(), useCase: 'Nie', originalAmount: 2, amountLeft: 2, patientDataId: 0})
//     PatientdataModel.create({id:0, address: 'Teststrasse2', aftername: 'test', city: 'testcity', medDataId: 0, prename: 'person', sex: 'male', zip:1000})
//     Person.create({id:2, userName: 'patient', password: 'patient1', patientDataId: 0, roleId: 2})

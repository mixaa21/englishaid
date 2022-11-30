
import { env } from '../../../env'
import {Dictionary} from "./Dictionary";
import {Category} from "./Category";
import {PartsOfSpeech} from "./PartsOfSpeech";

const ormconfig: any = {
    type: 'mysql',
    host: env.host,
    port: env.port,
    username: env.username,
    password: env.password,
    database: env.database,
    entities: [Dictionary, Category, PartsOfSpeech],
}

export default ormconfig;
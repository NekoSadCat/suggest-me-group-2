import s from './Error.module.scss';
import ErrorImg from '../../../assets/img/Error.png';

function Error() {
    return (
        <div className={s.error}>
            <div className={s.errorImg}>
                <img src={ErrorImg} alt="" />
            </div>
            <div className={s.errorTxt}>
                <h2>Lost your way?</h2>
                <p>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
            </div>
        </div>
    );
}

export default Error;
import classNames from 'classnames/bind';
import style from './BookCard.module.css';

const cx = classNames.bind(style);

function BookCard({ img, title }) {
    return (
        <div className={cx('topic-card-item')}>
            <img src={img} className={cx('img')} />
            <div className={cx('details')}>
                <h3>
                    <a href="#">
                        <span>{title}</span>
                    </a>
                </h3>
                <div>
                    <span className={cx('overflow')}>
                        <span>14th Edition</span>
                        <span className={cx('separatorDot')}>•</span>
                        <span>ISBN: 9780134414232</span>
                    </span>
                    <span className={cx('overflow')}>
                        Bruce Edward Bursten, Catherine J. Murphy, H. Eugene Lemay, Matthew E. Stoltzfus, Patrick
                        Woodward, Theodore E. Brown
                    </span>
                </div>
                <div>
                    <span className={cx('verified-messaging')}>
                        <span className={cx('icon')}>
                            <i className="fa-solid fa-circle-check"></i>
                        </span>
                        <span>7.778 lời giải</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BookCard;

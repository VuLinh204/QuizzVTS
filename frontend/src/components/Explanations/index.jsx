import classNames from 'classnames/bind';
import style from './Explanations.module.css';
import { useState } from 'react';
import AboutUs from '../AboutUs';
import Button from '../Button';
import FAQ from '../FAQ';
import BookCard from '../BookCard';
const cx = classNames.bind(style);

const topics = [
    { id: 1, name: 'Hóa học' },
    { id: 2, name: 'Vật lý' },
    { id: 3, name: 'Đại số tuyến tính' },
    { id: 4, name: 'Xác suất' },
    { id: 5, name: 'Khoa học xã hội' },
    { id: 6, name: 'Khoa học đời sống' },
];
function Explanations() {
    const [activeTopic, setActiveTopic] = useState('Hóa học');

    const handlTopicClick = (topic) => {
        setActiveTopic(topic);
    };
    return (
        <div className={cx('wrapper')}>
            <section className={cx('hero')}>
                <div className={cx('hero-content')}>
                    <h1>Tìm lời giải sách giáo khoa đáng tin cậy</h1>
                    <ul>
                        <li>
                            <span className={cx('icon')} style={{ color: '#18ae79' }}>
                                {' '}
                                <i className="fa-solid fa-book"></i>
                            </span>
                            Giải thích từng bước
                        </li>
                        <li>
                            <span className={cx('icon')} style={{ color: '#ff725b' }}>
                                <i className="fa-solid fa-pen"></i>
                            </span>
                            Được các chuyên gia biên soạn và xác minh
                        </li>
                        <li>
                            <span className={cx('icon')} style={{ color: '#e372ff' }}>
                                <i className="fa-solid fa-receipt"></i>
                            </span>
                            Hàng triệu lời giải cho các đầu sách giáo khoa phổ biến
                        </li>
                    </ul>
                    <div className={cx('hero-search')}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Tìm kiếm sách giáo khoa, ISBN, câu hỏi"
                            className={cx('input-search')}
                        />
                    </div>
                </div>
            </section>
            <div>
                <section className={cx('topics-section')}>
                    <h2 className={cx('toppic-title')}>Duyệt theo chủ đề</h2>
                    <div className={cx('topics-list')}>
                        {topics.map((item, index) => {
                            return (
                                <h3
                                    key={index}
                                    className={`${cx('topics-item')} ${activeTopic === item.name ? cx('active') : ''}`}
                                    onClick={() => handlTopicClick(item.name)}
                                >
                                    {item.name}
                                </h3>
                            );
                        })}
                    </div>
                    <div className={cx('topic-card')}>
                        <BookCard
                            img="https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg"
                            title="Chemistry: The Central Science"
                        />
                        <BookCard
                            img="https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg"
                            title="Chemistry: The Central Science"
                        />
                        <BookCard
                            img="https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg"
                            title="Chemistry: The Central Science"
                        />
                        <BookCard
                            img="https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg"
                            title="Chemistry: The Central Science"
                        />
                    </div>
                </section>
                <div style={{ backgroundColor: '#2e3856' }}>
                    <section className={cx('container')}>
                        <div className={cx('content')}>
                            <AboutUs
                                title="Lời giải từng bước hỗ trợ hiểu sâu hơn"
                                image="https://assets.quizlet.com/_next/static/media/step-by-step-night.170f7827.svg"
                                content="Lời giải từng bước chia nhỏ các khái niệm phức tạp thành những phần dễ hiểu. Cách tiếp cận này cho phép bạn nắm rõ từng bước của chủ đề trước khi chuyển sang bước tiếp theo, giảm khả năng nhầm lẫn và hỗ trợ hiểu sâu hơn. Cuối cùng, bạn sẽ có được sự hiểu biết toàn diện về chủ đề, giúp cải thiện khả năng ghi nhớ và truy hồi vào các kỳ thi hoặc bài tập về nhà trong tương lai."
                                rotate={true}
                            />
                            <AboutUs
                                title="Được các chuyên gia biên soạn và đảm bảo độ chính xác"
                                image="https://assets.quizlet.com/_next/static/media/written-by-experts-night.e0eefcf7.svg"
                                content="Các lời giải sách giáo khoa được biên soạn bởi những chuyên gia về chủ đề và được xác minh về độ chính xác, nhằm hỗ trợ bạn trong những câu hỏi về nhà hóc búa. Để đảm bảo mức độ chính xác cao nhất, quy trình xác minh bao gồm cách tiếp cận nhiều bước với nhiều vòng đánh giá và phản hồi trước khi bất kỳ lời giải sách giáo khoa nào được xuất bản."
                            />
                            <AboutUs
                                title="Hàng triệu lời giải, không ngừng mở rộng"
                                image="https://assets.quizlet.com/_next/static/media/millions-of-solutions-night.c49b3c70.svg"
                                content="Với hàng triệu lời giải sách giáo khoa đã được xác minh từ 14.000 đầu sách phổ biến, hãy yên tâm rằng thư viện lời giải của chúng tôi có thể hỗ trợ bạn trong tất cả các lớp học khó nhất. Các lời giải của chúng tôi được biên soạn cẩn thận bởi các chuyên gia giáo dục, hỗ trợ bạn chính xác và dễ hiểu. Với thư viện không ngừng mở rộng của chúng tôi, bạn có thể giải quyết mọi thử thách học thuật, cho dù đang gặp khó với bài tập sinh học, hay cần hướng dẫn từng bước để giải quyết một câu hỏi tích phân
                            phức tạp. Từ trung học đến đại học và hơn nữa, các lời giải sách giáo khoa của chúng tôi sẽ hỗ trợ bạn trong suốt hành trình giáo dục."
                            />
                        </div>

                        <div className={cx('content')}>
                            <h2 className={cx('content-title')}>Khám phá sách giáo khoa theo chủ đề</h2>
                            <div className={cx('content-btn')}>
                                <Button icon={<i className="fa-solid fa-file-pen"></i>} colorIcon="#f6406c" to="/">
                                    Nghệ thuật và nhân văn
                                </Button>
                                <Button icon={<i className="fa-solid fa-language"></i>} colorIcon="#a533ff" to="/">
                                    Ngôn ngữ
                                </Button>
                                <Button
                                    icon={<i className="fa-solid fa-square-root-variable"></i>}
                                    colorIcon="#ff983a"
                                    to="/"
                                >
                                    Toán học
                                </Button>
                                <Button icon={<i className="fa-solid fa-flask"></i>} colorIcon="#4255ff" to="/">
                                    Khoa học
                                </Button>
                                <Button icon={<i className="fa-solid fa-flask"></i>} colorIcon="#4255ff" to="/">
                                    Khoa học xã hội
                                </Button>
                                <Button icon={<i className="fa-solid fa-image"></i>} colorIcon="#4ebdeb" to="/">
                                    Khác
                                </Button>
                            </div>
                        </div>

                        <div className={cx('feedback')}>
                            <h2 className={cx('feedback-title')}>
                                <img
                                    alt=""
                                    src="https://assets.quizlet.com/_next/static/media/TikTokIcon.85c08241.svg"
                                />
                                Các học sinh nói về Quizlet
                            </h2>
                            <div className={cx('card-feedback')}>
                                <div className={cx('card-feedback-item')}>
                                    Tôi đã đạt 9,5 điểm trong phần bài kiểm tra Sinh học cuối kỳ của mình nhờ Quizlet 💙
                                    <div className={cx('author')}>
                                        <img
                                            className={cx('avatar')}
                                            alt=""
                                            src="https://assets.quizlet.com/_next/static/media/testimonials_alliecat1987.a1b1e470.png"
                                        />
                                        <h3 className={cx('name')}>Alliecat1987</h3>
                                    </div>
                                </div>
                                <div className={cx('card-feedback-item')}>
                                    Tôi đã đạt 9,5 điểm trong phần bài kiểm tra Sinh học cuối kỳ của mình nhờ Quizlet 💙
                                    <div className={cx('author')}>
                                        <img
                                            className={cx('avatar')}
                                            alt=""
                                            src="https://assets.quizlet.com/_next/static/media/testimonials_alliecat1987.a1b1e470.png"
                                        />
                                        <h3 className={cx('name')}>Alliecat1987</h3>
                                    </div>
                                </div>
                                <div className={cx('card-feedback-item')}>
                                    Tôi đã đạt 9,5 điểm trong phần bài kiểm tra Sinh học cuối kỳ của mình nhờ Quizlet 💙
                                    <div className={cx('author')}>
                                        <img
                                            className={cx('avatar')}
                                            alt=""
                                            src="https://assets.quizlet.com/_next/static/media/testimonials_alliecat1987.a1b1e470.png"
                                        />
                                        <h3 className={cx('name')}>Alliecat1987</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <FAQ />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Explanations;

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { FC, Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import CommentSection from './CommentSection';

interface ValuesType {
  content: string;
  img: string;
  title: string;
}

const Single: FC = () => {
  const [postState, setPostState] = useState<ValuesType>({
    content: '',
    img: '',
    title: '',
  });
  const values: any = useLocation().state;
  useEffect(() => {
    if (typeof values === 'object') {
      const { content, img, title } = values as ValuesType; // Type casting

      setPostState({ content, img, title });
    }
  }, []);

  return (
    <Fragment>
      <div className="home text-secondary rounded p-5">
        <section className="row my-5 text-center">
          <h1 className="my-5">SINGLE POST</h1>
          <p className="lead my-2">{postState.title}</p>
        </section>
      </div>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="mb-5">
                <img
                  src={`${postState.img}`}
                  alt="Image"
                  className="img-fluid"
                />
              </p>
              <h2 className="mb-3">
                It is a long established fact a reader be distracted
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                Molestiae cupiditate inventore animi, maxime sapiente optio,
                illo est nemo veritatis repellat sunt doloribus nesciunt! Minima
                laborum magni reiciendis qui voluptate quisquam voluptatem
                soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.
                Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
              </p>
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in. Exercitationem atque quidem
                tempora maiores ex architecto voluptatum aut officia doloremque.
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis
                reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>
              <p className="mb-5">
                <img
                  src="images/ximage_2.jpg.pagespeed.ic.HhFRahl7c7.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </p>
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores.
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum quidem pariatur! Quia fuga iste
                tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
                explicabo soluta commodi libero voluptatem similique id quidem?
                Blanditiis voluptates aperiam non magni. Reprehenderit nobis
                odit inventore, quia laboriosam harum excepturi ea.
              </p>
              <p>
                Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam
                ipsam quidem, dolor distinctio similique asperiores voluptas
                enim, exercitationem ratione aut adipisci modi quod quibusdam
                iusto, voluptates beatae iure nemo itaque laborum. Consequuntur
                et pariatur totam fuga eligendi vero dolorum provident.
                Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus
                culpa, tenetur recusandae!
              </p>
              <p>
                Voluptas dolores dignissimos dolorum temporibus, autem aliquam
                ducimus at officia adipisci quasi nemo a perspiciatis provident
                magni laboriosam repudiandae iure iusto commodi debitis est
                blanditiis alias laborum sint dolore. Dolores, iure,
                reprehenderit. Error provident, pariatur cupiditate soluta
                doloremque aut ratione. Harum voluptates mollitia illo minus
                praesentium, rerum ipsa debitis, inventore?
              </p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Life
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Sport
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Tech
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Travel
                  </a>
                </div>
              </div>
              <div className="about-author d-flex bg-light p-4">
                <div className="bio mr-5">
                  <img
                    src="images/xperson_1.jpg.pagespeed.ic.8e2vi2ER3S.jpg"
                    alt="Image placeholder"
                    className="img-fluid mb-4"
                  />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut, sunt placeat nam vero culpa sapiente
                    consectetur similique, inventore eos fugit cupiditate
                    numquam!
                  </p>
                </div>
              </div>
              {/* <CommentSection /> */}
            </div>
            <div className="col-lg-4 sidebar pl-lg-5">
              <div className="sidebar-box">
                <div className="categories">
                  <h3>Categories</h3>
                  <li>
                    <a href="#">
                      Illustration <span className="ion-ios-arrow-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Branding <span className="ion-ios-arrow-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Application <span className="ion-ios-arrow-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design <span className="ion-ios-arrow-forward" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Marketing <span className="ion-ios-arrow-forward" />
                    </a>
                  </li>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Recent Blog</h3>
                <div className="block-21 d-flex mb-4">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage:
                        'url(images/ximage_1.jpg.pagespeed.ic.6nutUC1128.jpg)',
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar" /> Nov. 14, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person" /> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 d-flex mb-4">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage:
                        'url(images/ximage_2.jpg.pagespeed.ic.HhFRahl7c7.jpg)',
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar" /> Nov. 14, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person" /> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 d-flex mb-4">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage:
                        'url(images/ximage_3.jpg.pagespeed.ic.IDmnFNLqH_.jpg)',
                    }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar" /> Nov. 14, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person" /> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat" /> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    cat
                  </a>
                  <a href="#" className="tag-cloud-link">
                    abstract
                  </a>
                  <a href="#" className="tag-cloud-link">
                    people
                  </a>
                  <a href="#" className="tag-cloud-link">
                    person
                  </a>
                  <a href="#" className="tag-cloud-link">
                    model
                  </a>
                  <a href="#" className="tag-cloud-link">
                    delicious
                  </a>
                  <a href="#" className="tag-cloud-link">
                    desserts
                  </a>
                  <a href="#" className="tag-cloud-link">
                    drinks
                  </a>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Single;

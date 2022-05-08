import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
      <div className="md:grid grid-cols-2 m-10 gap-10">
        <Helmet>
          <title>Blogs - E warehouse</title>
        </Helmet>
        <div className="bg-cyan-200 px-6 py-10 rounded-2xl mb-10">
          <h1 className="font-bold text-xl ">
            Q:Difference between javascript and nodejs
          </h1>
          <p>
            Ans:
            <p className="font-bold underline">JavaScript :</p>
            <p>
              Javascript is a Scripting language. Javascript is a high-level
              programming language that is used for writing scripts on the
              website. Javascript can only be run in the browsers. It is
              basically used on the client-side.
            </p>
            <p className="font-bold underline">NodeJS:</p>
            <p>
              NodeJS is a cross-platform and open source Javascript runtime
              environment that allows the javascript to be run on the
              server-side. We can run Javascript outside the browser with the
              help of NodeJS.It is mostly used on the server-side.
            </p>
          </p>
        </div>
        <div className="bg-cyan-200 px-6 py-10 rounded-2xl mb-10">
          <h1 className="font-bold text-xl ">
            Q:When should you use nodejs and when should you use mongodb
          </h1>
          <p>
            Ans: NodeJS is a JavaScript runtime environment. It's actually helps
            JavaScript to run outside of server. It's used in server side
            development. MongoDB is NoSQL database which is document oriented.
            It represents data as of JSON documents. It's used for store data.
            <p className="font-bold">
              The summary is MongoDB is a database where we can store data and
              NodeJS helps us to to connect our client site to database by it's
              server site
            </p>
          </p>
        </div>
        <div className="bg-cyan-200 px-6 py-10 rounded-2xl mb-10">
          <h1 className="font-bold text-xl ">
            Q:Differences between SQL and NoSQL databases.
          </h1>
          <p>Ans:</p>
          <p className="font-bold underline">SQL</p>
          <p>
            Structured Query Language.relational database management system.
            These databases have fixed or static or predefined schema. These
            databases are not suited for hierarchical data storage. These
            databases are best suited for complex queries. Vertically Scalable.
          </p>
          <p className="font-bold underline">NoSQL</p>
          <p>
            Not only Structured Query Language.Non-relational or distributed
            database system. They have dynamic schema. These databases are best
            suited for hierarchical data storage. These databases are not so
            good for complex queries. Horizontally scalable
          </p>
        </div>
        <div className="bg-cyan-200 px-6 py-10 rounded-2xl mb-10">
          <h1 className="font-bold text-xl ">
            Q:What is the purpose of jwt and how does it work
          </h1>
          <p>
            Ans: JSON Web Token, is an
            open fashionable used to percentage protection records among parties
            — a purchaser and a server. Each JWT includes encoded JSON objects,
            along with a fixed of claims. JWTs are signed the usage of a
            cryptographic set of rules to make sure that the claims can not be
            altered after the token is issued.<br/> JWTs vary from different net
            tokens in that they include a fixed of claims. Claims are used to
            transmit records among parties. What those claims are relies upon at
            the use case at hand. For example, a declare can also additionally
            assert who issued the token, how lengthy it's far legitimate for, or
            what permissions the purchaser has been granted. A JWT is a string
            made of 3 parts, separated through dots (.)
          </p>
        </div>
      </div>
    );
};

export default Blogs;
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'Vocabulary';
const collection = 'Vocab List';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
db.createCollection( "Mandarin Vocab", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["term", "pinyin", "definition"],
            properties: {
                term: {
                    bsonType: "string",
                    description: "Chinese vocabulary word"
                },
                pinyin: {
                    bsonType: "string",
                    description: "Pinyin pronunciation"
                },
                definition: {
                    bsonType: "string",
                    description: "English definition"
                }
            }
        }
    }
})
db.programming_vocab.insertMany([
    {
        chinese: "编程",
        pinyin: "biānchéng",
        definition: "Programming"
      },
    {
        chinese: "数据库",
        pinyin: "shùjùkù",
        definition: "Database"
      },
      {
        chinese: "网络",
        pinyin: "wǎngluò",
        definition: "Network"
      },
      {
        chinese: "程序",
        pinyin: "chéngxù",
        definition: "Program"
      },
      {
        chinese: "代码",
        pinyin: "dàimǎ",
        definition: "Code"
      },
      {
        chinese: "软件",
        pinyin: "ruǎnjiàn",
        definition: "Software"
      },
      {
        chinese: "硬件",
        pinyin: "yìngjiàn",
        definition: "Hardware"
      },
      {
        chinese: "集成开发环境",
        pinyin: "jíchéng kāifā huánjìng",
        definition: "Integrated Development Environment (IDE)"
      },
      {
        chinese: "版本控制",
        pinyin: "bǎnběn kòngzhì",
        definition: "Version control"
      },
      {
        chinese: "配置",
        pinyin: "pèizhì",
        definition: "Configuration"
      },
      {
        chinese: "数据结构",
        pinyin: "shùjù jiégòu",
        definition: "Data structure"
      },
      {
        chinese: "算法",
        pinyin: "suànfǎ",
        definition: "Algorithm"
      },
      {
        chinese: "编译",
        pinyin: "biānyì",
        definition: "Compile"
      },
      {
        chinese: "调试",
        pinyin: "tiáoshì",
        definition: "Debug"
      },
      {
        chinese: "异常",
        pinyin: "yìcháng",
        definition: "Exception"
      },
      {
        chinese: "面向对象",
        pinyin: "miànxiàng duìxiàng",
        definition: "Object-oriented"
      },
      {
        chinese: "面向过程",
        pinyin: "miànxiàng guòchéng",
        definition: "Procedural"
      },
      {
        chinese: "函数",
        pinyin: "hànsù",
        definition: "Function"
      },
      {
        chinese: "类",
        pinyin: "lèi",
        definition: "Class"
      },
      {
        chinese: "对象",
        pinyin: "duìxiàng",
        definition: "Object"
      },
      {
        chinese: "继承",
        pinyin: "jìchéng",
        definition: "Inheritance"
      },
      {
        chinese: "多态性",
        pinyin: "duōtàixìng",
        definition: "Polymorphism"
      }

])

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/

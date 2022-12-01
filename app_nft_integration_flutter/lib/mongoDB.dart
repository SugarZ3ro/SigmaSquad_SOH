import 'package:mongo_dart/mongo_dart.dart';
import 'mongo.dart';
import 'dart:developer';

class MongoDatabase {
  static connect(count) async {
    var db = await Db.create(MONGO_URL);
    await db.open();
    inspect(db);
    var status = db.serverStatus();
    print(status);
    var collection = db.collection(COLLECTION_NAME);
    // await collection.insertOne({
    //   "username": "x",
    //   "count": 0,
    // });
    collection.updateOne(
        where.eq('username', 'ashish'), modify.set('count', count));
    print(await collection.find().toList());
  }
}

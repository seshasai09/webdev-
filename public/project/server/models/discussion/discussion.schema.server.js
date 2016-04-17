var mongoose = require('mongoose');


module.exports = function(){
    var Discussion_CommentsSchema = require('./discussion_comments.schema')();
  var DiscussionSchema = mongoose.Schema({
      name: String,
      description:String,
      discussion_comments:[Discussion_CommentsSchema],
      createddate : {
          type:Date,
          default: Date.now()
      },
      createdby:String,
      active:Boolean
  },{collection:'discussion'});

    return DiscussionSchema;
};
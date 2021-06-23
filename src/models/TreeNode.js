class TreeNode {

    constructor(input, question) {
      this.value = input;
      this.question = question;
      this.show = false;
      this.answer = '';
      this.descendants = [];
      this.left = null; // NO 
      this.right = null; // SI
      this.btn = true;
    }

    set_show(show) {
      this.show=show;
    }

    set_answer(answer) {
      this.answer = answer;
    }

    set_left(node) {
      this.left = node;
    }

    set_right(node){
      this.right = node;
    }

    set_btn(btn) {
      this.btn=btn;
    }

}  

module.exports = TreeNode;
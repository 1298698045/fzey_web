var isMobile = false;
let width = document.body.clientWidth || document.documentElement.clientWidth;
if (width <= 750) {
  isMobile = true;
}
var mixin = {
  data: function () {
    return {
      isArticle: false,
      hasRoute: this.hasOwnProperty("$route"),
      selectMenu: "",
      isGotop: false,
      qrCodeIdx: 0,
      isTop: false, // 是否在页面顶部
      isFixed: false,
      isHeader: false,
      prevText: isMobile ? "" : "上一页",
      nextText: isMobile ? "" : "下一页",
      layout: isMobile ? "prev, pager, next" : "prev, pager, next, jumper",
      height: "",
    };
  },
  computed: {
    activeMenu: function () {
      return this.selectMenu || this.typePath;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleIsScroll, true);
    window.addEventListener("scroll", this.handleSroll);
  },
  methods: {
    push: function (path) {
      router.push({ path: path });
    },
    gotoHref: function (url) {
      location.href = url;
      this.isHeader = false;
    },
    goto: function (url) {
      const href = window.location.href;
      window.open(url);
      setTimeout(()=>{
        window.location.href = href;
      },300)
      this.isHeader = false;
    },
    onMenuMouseOver: function (menu) {
      this.selectMenu = menu;
    },
    onMenuMouseLeave: function () {
      this.selectMenu = "";
    },
    handleTabQrCode: function (idx) {
      this.qrCodeIdx = idx;
    },
    handleIsScroll: function () {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 500 ? (this.isTop = true) : (this.isTop = false);
    },
    toTop: function () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(function () {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          this.isTop = true;
          clearInterval(timeTop);
        } else {
          this.isTop = false;
        }
      }, 10);
    },
    handleSroll: function (e) {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top >= 140) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    handleOpen: function () {
      this.$refs.childModal.dialogVisible = true;
    },
    dateFormat: function (date, fmt = "YYYY-MM-DD") {
      return moment(date).format(fmt);
    },
    // 导航开关
    handleNavOpen() {
      this.isHeader = !this.isHeader;
      if (this.isHeader) {
        this.$nextTick(() => {
          this.height = document.documentElement.clientHeight - 66;
          document.body.style.overflow = "hidden";
        });
      } else {
        this.$nextTick(() => {
          this.height = 0;
          document.body.style.overflow = "auto";
        });
      }
    },
    getSimpleText(html) {
      var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1, ""); //执行替换成空字符
      return msg;
    }
  },
};

// const Modal =
// Vue.extend({
//     template: `
//         <el-dialog
//         title="试用申请咨询"
//         :visible.sync="dialogVisible"
//         width="440px"
//         :before-close="handleClose">
//         <div class="modalContent">
//             <div class="desc">完善以下信息您可以免费体验我们的产品功能，我们的顾问会在 1个工作日内与您取得联系</div>
//             <el-form ref="form" :rules="rules" :model="modalForm" label-width="80px">
//                 <el-form-item required class="form_item" size="mini" label="单位名称" prop="unitName">
//                     <el-input v-model="modalForm.unitName"></el-input>
//                 </el-form-item>
//                 <el-form-item required class="form_item" size="mini" label="姓名" prop="name">
//                     <el-input v-model="modalForm.name"></el-input>
//                 </el-form-item>
//                 <el-form-item required class="form_item" size="mini" label="手机号" prop="phone">
//                     <el-input v-model="modalForm.phone"></el-input>
//                 </el-form-item>
//             </el-form>
//         </div>
//         <span slot="footer" class="dialog-footer">
//             <el-button class="submitBtn" type="primary" @click="dialogVisible = false">提交申请</el-button>
//         </span>
//     </el-dialog>
//     `,
//     data(){
//         return {
//             dialogVisible:false,
//             modalForm:{
//                 unitName: '',
//                 name: '',
//                 phone: ''
//             },
//             rules:{
//                 unitName:[
//                     { required: true, message: '请输入单位名称', trigger: 'blur' }
//                 ],
//                 name:[
//                     { required: true, message: '请输入姓名', trigger: 'blur' }
//                 ],
//                 phone:[
//                     { required: true, message: '请输入电话', trigger: 'blur' }
//                 ]
//             }
//         }
//     },
//     methods:{
//         handleClose(){
//             this.dialogVisible = false;
//         },
//         // 弹框
//         handleClose(){
//             this.dialogVisible = false;
//         }
//     }
// })

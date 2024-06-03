
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href={{asset('/css/bootstrap.min.css')}}>
    <script src={{asset('/js/jquery-3.6.1.min.js')}}></script>
    <title>学生考勤签到系统</title>
    <style>
        body {
            cursor: pointer;
        }
    </style>
</head>
<body>
    {{csrf_field()}}
<div class="container">
    <h1 style="text-align: center;margin: 30px 0">学生考勤签到系统</h1>
    <form action="{{asset('select')}}" method="get" id="formInfo">
        <div>
           
            <input type="text" name="classType" id="classType">
            <input  name="reset"  type="submit" value="查询">
        </div>
    </form>
    <form action="delectall.php" method="get">
        <div style="float: right">
            <input  onclick="return alert('确定重置?')" name="reset"  type="submit" value="重置">
        </div>
    </form>
    <table class="table table-hover" id="info">
        <thead>
        <tr>      
            <th>班级</th>
            <th>姓名</th>
            <th>电话</th>
            <th>状态</th>
            <th>签到</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
            @foreach($data as $v)

        <tr>
          
            <td>{{$v->class}}</td>
            <td>{{$v->name}}</td>
            <td>{{$v->tel}}</td>
            <td>{{$v->zt}}</td>
            <td>
                    <a type="submit" onclick="return confirm('是否已到场？')" href="{{asset('updata')}}?id={{$v->Id}}"><button>签到</button></a>
            </td>
            <td>
                <button>
                    <a onclick="return confirm(' 确定要删除吗？')" href="{{asset('dela')}}?id={{$v->Id}}">删除</a>
                </button>
            </td>
        </tr>
        @endforeach

        </tbody>
    </table>
    <div class="text-center">
        <button>
            <a href="{{asset('addym')}}">添加学生</a>
        </button>

    </div>
</div>
<script>
    </script>
</body>
</html>



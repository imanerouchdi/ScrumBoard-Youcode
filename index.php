<?php 
	include('scripts.php');
	$result = getTasks($conn , "Done"); 
?>
<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="utf-8" />
	<title>YouCode | Scrum Board</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	<meta content="viewport" name="description">
	<meta content="" name="author">
	<!-- ================== BEGIN core-css ================== -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<link href="assets/css/vendor.min.css" rel="stylesheet">
	<link href="assets/css/default/app.min.css" rel="stylesheet">
	<link href="assets/css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" >
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" >
	<!-- <link rel="stylesheet" href="style.css"> -->
	<!-- ================== END core-css ================== -->
</head>
<body>
	<!-- BEGIN #app -->
	<div id="app" class="app-without-sidebar">
		<!-- BEGIN #content -->
		<div id="content" class="app-content main-style"> 
			<div class="d-flex align-items-center justify-content-between">
				<!-- <div class="d-flex justify-content-between"></div> -->
				<div>
					<ol class=" breadcrumb">
						<li class=" breadcrumb-item"><a href="javascript:;">Home</a></li>
						<li class="breadcrumb-item active">Scrum Board </li>
					</ol>
					<!-- BEGIN page-header -->
					<h1 class="page-header "> <!-- mt-10px -->
						Scrum Board 
					</h1>
					<!-- END page-header -->
				</div>
				<div class="col- float-end"> 
					<button  id="buttonAddTask" class="btn btn-success" onclick="createTask()" data-bs-toggle="modal" data-bs-target="#Modal">
						<i class="bi bi-plus"></i> Add Task</button>
				</div>
			</div> 
				<div class="row">
			        <!--------------------------------------- div 1 ----------------------------------------------->
					<div class="col-sm-12 col-md-6 col-lg-4   p-2 mb-5  rounded">   
						<div class="card  ">  
							<div class=" card-header bg-dark">
								<h4 class="text-light mb-0 p-10px">To do (<span id="to-do-tasks-count">5</span>)</h4> 
							</div> 
							<div class="d-flex flex-column shadow" id="to-do-tasks" name="to do" >
								<!-- TO DO TASKS HERE -->
								
								<?php  $result = getTasks($conn , "To Do");  ?>
								
								<?php while($task = mysqli_fetch_assoc($result)){ ?>
									<button class="border d-flex py-2 task" data-bs-toggle="modal" data-bs-target="#Modal" onclick="editTask() ">
											<div class="col-sm-1 pe-2">
												<i class="fa-regular fa-circle-question fa-lg pt-2 text-success"></i>
											</div>
											<div class="col-sm-11 text-start">
												<div class="fw-bolder"><?php echo $task["title"] ?></div>
												<div class="">
													<div class="">#${cmp+1} created in <?php echo $task["task_datetime"] ?></div>
													<div class="text-Des" title=""><?php echo $task["description"]?></div>
												</div>
												<div class="">
													<span class="btn btn-primary btn-sm"><?echo $task["priorities"]?></span>
													<span class="btn bg-light-600 btn-sm"><?echo $task["types"]?></span>
												</div>
											</div>
									</button>
								<?php } ?>`
							</div>
						</div>
					</div> 
				    <!-- -------------------------------------div 2 ---------------------------------------------- -->
					<div class="col-sm-12 col-md-6 col-lg-4  p-2 mb-5 rounded">
						<div class="card">
							<div class=" card-header bg-dark">
								<h4 class=" text-light mb-0 p-10px">In Progress (<span id="in-progress-tasks-count">4</span>)</h4>
							</div>
							<div class="d-flex flex-column shadow" id="in-progress-tasks" name="In Progress">
								<?php  $result = getTasks($conn , "In Progress");  ?>
								<?php while($task = mysqli_fetch_assoc($result)){ ?>
										<button class="border d-flex py-2 task" data-bs-toggle="modal" data-bs-target="#Modal" onclick="editTask() ">
												<div class="col-sm-1 pe-2">
													<i class="fa fa-circle-notch fa-lg pt-2 text-success"></i>
												</div>
												<div class="col-sm-11 text-start">
													<div class="fw-bolder"><?php echo $task["title"] ?></div>
													<div class="">
														<div class="">#${cmp+1} created in <?php echo $task["task_datetime"] ?></div>
														<div class="text-Des" title=""><?php echo $task["description"]?></div>
													</div>
													<div class="">
														<span class="btn btn-primary btn-sm"><?echo $task["priorities"]?></span>
														<span class="btn bg-light-600 btn-sm"><?echo $task["types"]?></span>
													</div>
												</div>
										</button>
									<?php } ?>
							</div>
						</div>
					</div>
				 	<!--  -------------------------------------div 3-------------------------------- -->
				 	<div class="col-sm-12 col-md-6 col-lg-4   p-2 mb-5  rounded">
						<div class="card"> 
							<div class="card card-header bg-dark">
								<h4 class="text-light mb-0 p-10px">Done (<span id="done-tasks-count">4</span>)</h4>  
							</div>
							<div class="d-flex flex-column shadow" id="done-tasks" name="done">
								<!-- DONE TASKS HERE -->
								<?php  $result = getTasks($conn , "Done");  ?>
								<?php while($task = mysqli_fetch_assoc($result)){ ?>
								<button class="border d-flex py-2 task" data-bs-toggle="modal" data-bs-target="#Model" onclick="editTask() ">
									<div class="col-sm-1 pe-2">
										<i class="fa-regular fa-circle-check fa-lg pt-2 text-success"></i>
									</div>
									<div class="col-sm-11 text-start">
										<div class="fw-bolder"><?php echo $task["title"] ?></div>
											<div class="">
												<div class="">#${cmp+1} created in <?php echo $task["task_datetime"] ?></div>
												<div class="text-Des" title=""><?php echo $task["description"]?></div>
											</div>
											<div class="">
												<span class="btn btn-primary btn-sm"><?echo $task["priorities"]?></span>
												<span class="btn bg-light-600 btn-sm"><?echo $task["types"]?></span>
											</div>
											</div>
								</button>
								<?php } ?>
							</div>
						</div>
					</div>
				</div>
		<!-- END #content -->
		<!-- BEGIN scroll-top-btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i class="fa fa-angle-up"></i></a>
		<!-- END scroll-top-btn -->
		</div>
	</div>
	<!-- END #app -->
	<!-- TASK MODAL -->
	<div class="modal fade" id="Modal"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<!-- Modal content goes here -->
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add Task</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<form id="form" method="POST">
						<div class="modal-body">
							<div id="messageError" class="text-center text-danger"></div>
							<div class="mb-3">
								<label id="title-task" class="col-form-label">Title</label>
								<input type="text" class="form-control" id="titre" name="titre" required>
							</div>
							<div class="mb-3 ">
								<label class="col-form-label">Type</label>
								<div class="form-check ms-3">
									<input class="form-check-input" type="radio" name="type" id="feature" value="Feature" >
									<label class="form-check-label" for="flexRadioDefault1">Feature</label>
								</div>
								<div class="form-check ms-3">
									<input class="form-check-input" type="radio" name="type" id="bug" value="Bug" >
									<label class="form-check-label" for="flexRadioDefault2">Bug</label>
								</div>
							</div>
							<div class="mb-3">
								<label for="Priority" class="col-form-label">Priority</label>
								<select class="form-select" aria-label="Default select example" id="Priority" name="Priority">
									<option selected value="0">Please select</option>
									<option value="Low">Low</option>
									<option value="Medium">Medium</option>
									<option value="High">High</option>
									<option value="Critical">Critical</option>
								</select>
							</div>
							<div class="mb-3">
								<label for="Status" class="col-form-label">Status</label>
								<select class="form-select" aria-label="Default select example" id="Status"  name="Status">
									<option selected value="0">Please select</option>
									<option value="To Do">To Do</option>
									<option value="In Progress">In Progress</option>
									<option value="Done">Done</option>
								</select>
							</div>
							<div class="mb-3">
								<label for="Date" class="col-form-label">Date</label>
								<input type="date" class="form-control" id="Date" name="Date">
							</div>
							<div class="mb-3">
								<label for="desc" class="col-form-label">Description</label>
								<textarea class="form-control" id="desc" name="desc"></textarea>
							</div>
						</div>
						<div class="modal-footer">
							<button id="cancel" type="button" class="btn btn-light text-black border" data-bs-dismiss="modal">Cancel</button>
							<button id="save"   type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="saveTask()"   >Save</button>
							<button id="update" type="button" class="btn btn-warning" data-bs-dismiss="modal" onclick="updateTask()" >Update</button>
							<button id="delete" type="button" class="btn btn-danger"  data-bs-dismiss="modal" onclick="deleteTask()" >Delete</button>
						</div>
					</form>
				</div>
			</div>
	</div>
	<!-- ================== BEGIN core-js ================== -->
	
	<!-- <script src="assets/js/data.js"></script> -->
	<!-- <script src="assets/js/app.js"></script> -->
	<script src="assets/js/vendor.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<!-- ================== END core-js ================== -->
</body>
</html>
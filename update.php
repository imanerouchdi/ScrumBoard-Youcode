<?php 
	include('scripts.php');
    $id = $_GET['updateId'];
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

                        <!-- <section class="container"> -->
                        <form method="POST" action="scripts.php" id="form">
						<div class="modal-body">
							<div id="messageError" class="text-center text-danger"></div>
							<div class="mb-3">
                            <?php  $result = EditTask($id)  ;
                            		$task = mysqli_fetch_assoc($result);
                            // var_dump($task);
                            ?>
								<label id="title-task" class="col-form-label">Title</label>
								<input type="text" class="form-control" id="titre" name="title" required value="<?php echo $task["title"] ?>">
							</div>

                            <input class="d-none" type="text" value="<?php echo $task["id"] ?>" name="idTask">


							<div class="mb-3 ">
								<label class="col-form-label">Type</label>
								<div class="form-check ms-3">
									<input class="form-check-input" type="radio" name="type" id="feature" value="1" <?php echo ($task['type_name']== 'feature') ?  "checked" : "" ;?> >
									<label class="form-check-label" for="flexRadioDefault1">Feature</label>
								</div>
								<div class="form-check ms-3">
									<input class="form-check-input" type="radio" name="type" id="bug" value="2" <?php echo ($task['type_name']== 'big') ?  "checked" : "" ;?>>
									<label class="form-check-label" for="flexRadioDefault2">Bug</label>
								</div>
							</div>
							<div class="mb-3">
								<label for="Priority" class="col-form-label">Priority</label>
								<select class="form-select" aria-label="Default select example" id="Priority" name="Priority">
									<option selected value="<?php echo $task["id_priority"] ?>" ><?php echo $task["priorities_name"] ?></option>
									<option value="1" >Low</option>
									<option value="2" >Hight</option>
									<option value="3">Medium</option>
									<option value="4">Critical</option>
								</select>
							</div>
							<div class="mb-3">
								<label for="Status" class="col-form-label">Status</label>
								<select class="form-select" aria-label="Default select example" id="Status"  name="Status">
									<option selected value="<?php echo $task["id_status"] ?>"><?php echo $task["statuses_name"] ?></option>
									<option value="1">To Do</option>
									<option value="2">In Progress</option>
									<option value="3">Done</option>
								</select>
							</div>
							<div class="mb-3">
								<label for="Date" class="col-form-label">Date</label>
								<input type="date" class="form-control" id="Date" name="Date" value="<?= $task["task_datetime"] ?>">

							</div>
							<div class="mb-3">
								<label for="desc" class="col-form-label">Description</label>
								<textarea class="form-control" id="desc" name="description" ><?= $task["description"] ?></textarea>
							</div>
						</div>
						<div class="modal-footer">
							<button id="cancel" type="button" class="btn btn-light text-black border" data-bs-dismiss="modal">Cancel</button>
							<button name="update" type="submit" class="btn btn-warning" >Update</button>
							<!-- <input type="submit" value="save" name="save" class="btn btn-info"> -->
						</div>
					</form> 
                           
                        <!-- </section> -->

	<!-- ================== BEGIN core-js ================== -->
	
	<!-- <script src="assets/js/data.js"></script> -->
	<!-- <script src="assets/js/app.js"></script> -->
	<script src="assets/js/vendor.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<!-- ================== END core-js ================== -->
</body>
</html>
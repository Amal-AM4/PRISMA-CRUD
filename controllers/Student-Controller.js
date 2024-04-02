const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function viewSubject (req, res) {
    const subName = await prisma.SubjectModel.findMany();
    res.render('addStudent', { data: subName });
}

async function addStudent (req, res) {
    try {
        const name = req.body.name;
        const age = req.body.age;
        const subject = req.body.subject;

        const newStudent = await prisma.StudentModel.create({
            data: {
                name: name,
                age: parseInt(age),
                subjectId: parseInt(subject)
            }
        });

        res.redirect('/displayStudent');

    } catch (error) {
        console.error(error);
    }
}

async function displayStudent (req, res) {
    const allUser = await prisma.StudentModel.findMany({
        include: {
            subject: true
        }
    });
    res.render('displayStudent', { data: allUser });
}

async function removeStudent (req, res) {
    try {
        const id = parseInt(req.params.id); 
        const isDeleted = await prisma.studentModel.update({
        where: { id: id },
        data: { isDeleted: true },
        });

        res.redirect('/displayStudent');
    } catch (error) {
        console.error(error);
    }
}

async function singleView (req, res) {
    try {
        const uuid = req.params.uuid;
        const singleData = await prisma.studentModel.findUnique({
            where: { std_uuid: uuid }
        });
        res.render('singleView', { data: singleData });
    } catch (error) {
        console.error(error);
    }
}

async function deletedRecord (req, res) {
    try {
        const deletedData = await prisma.studentModel.findMany({
            where: {isDeleted: true},
            include: {
                subject: true
            }
        });
        res.render('reportDeleted', {data: deletedData});
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    viewSubject,
    addStudent,
    displayStudent,
    removeStudent,
    singleView,
    deletedRecord
}
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function displaySubject(req, res) {  
    const fullSub = await prisma.SubjectModel.findMany();
    res.render('display_subject', { data: fullSub });
    // res.json(fullSub)
}


module.exports = {displaySubject}



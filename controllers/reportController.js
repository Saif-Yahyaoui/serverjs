import Report from "../models/report.js";

export async function createReport(req, res) {
  const { userId, postId, reason, status } = req.body;

  try {
    const newReport = await Report.create({ userId, postId, reason, status });
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateReport(req, res) {
  const { id } = req.params;
  const { userId, postId, reason, status } = req.body;

  try {
    const updatedReport = await Report.findByIdAndUpdate(id, { userId, postId, reason, status }, { new: true });
    if (updatedReport) {
      res.status(200).json(updatedReport);
    } else {
      res.status(404).json({ message: "Rapport non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllReports(req, res) {
  try {
    const reports = await Report.find({});
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getReportById(req, res) {
  const { id } = req.params;

  try {
    const report = await Report.findById(id);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Rapport non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
